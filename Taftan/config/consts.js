module.exports = {
    api_url: 'http://10.55.5.13:8020',
    // api_url: 'http://taftantest.adonistech.ir:8000',
    // api_url: 'http://taftantest.adonistech.ir:8000',
    // api_url: 'http://10.100.52.4:8070', // taftan
    // api_url: 'http://10.100.52.4:8060', // login

    use_local_data: false,
    // use_local_data: true,
    
    MAP_API_KEY: 'web.5e74918a738b4016b6e2c83ff02b63db',
    
    twoDigit: (num) => {
        num = parseInt(num);
        if(num > 9) return num.toString();
        return '0' + num.toString();
    }
};