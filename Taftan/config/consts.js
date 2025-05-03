module.exports = {
    // use_local_data: false,
    use_local_data: true,
    MAP_API_KEY: 'web.5e74918a738b4016b6e2c83ff02b63db',
    twoDigit: (num) => {
        num = parseInt(num);
        if(num > 9) return num.toString();
        return '0' + num.toString();
    }
};