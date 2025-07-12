package com.taftan

import android.content.Intent
import android.util.Log
import com.facebook.react.HeadlessJsTaskService
import com.facebook.react.bridge.Arguments
import com.facebook.react.jstasks.HeadlessJsTaskConfig
import javax.annotation.Nullable

class LocationService : HeadlessJsTaskService() {
    companion object {
        private const val TAG = "LocationService"
    }

    override fun onCreate() {
        super.onCreate()
        Log.d(TAG, "LocationService created")
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        Log.d(TAG, "LocationService started")
        return super.onStartCommand(intent, flags, startId)
    }

    override fun getTaskConfig(intent: Intent): HeadlessJsTaskConfig? {
        Log.d(TAG, "Getting task config")
        val data = Arguments.createMap().apply {
            putString("message", "Location service started")
            putDouble("timestamp", System.currentTimeMillis().toDouble())
        }
        
        return HeadlessJsTaskConfig(
            "LocationTask", // task name matches the one you registered in JS
            data,
            5000, // timeout for task
            true // allow task to run while app is in foreground
        ).also {
            Log.d(TAG, "Task config created for LocationTask")
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d(TAG, "LocationService destroyed")
    }
} 