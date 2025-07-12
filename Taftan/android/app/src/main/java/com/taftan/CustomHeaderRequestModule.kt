package com.taftan  // <-- match your actual app package name

import com.facebook.react.bridge.*
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Response
import okhttp3.Call
import okhttp3.Callback
import java.io.IOException

class CustomHeaderRequestModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "CustomHeaderRequest"
    }

    @ReactMethod
    fun sendGetRequestWithCustomHeader(url: String, headers: ReadableMap, promise: Promise) {
        val client = OkHttpClient()
        val builder = Request.Builder().url(url)

        val iterator = headers.entryIterator
        while (iterator.hasNext()) {
            val entry = iterator.next()
            val key = entry.key
            val value = entry.value?.toString() ?: ""
            builder.addHeader(key, value)
        }

        val request = builder.get().build()

        client.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) {
                promise.reject("RequestError", e.message, e)
            }

            override fun onResponse(call: Call, response: Response) {
                val body = response.body?.string() ?: ""
                val result = Arguments.createMap()
                result.putInt("status", response.code)
                result.putString("body", body)
                promise.resolve(result)
            }
        })
    }
}
