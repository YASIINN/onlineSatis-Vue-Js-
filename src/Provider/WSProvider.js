var WSProvider = {
    ajaxPost: function(serviceName, jsonParams) {
      debugger

      var deferred = new Promise(function(resolve, reject) {
            return $.ajax({
                type: 'POST',
                url: "http://89.252.181.4:8071/hakanbt/onlinesatis-api/view/" +serviceName,
                datatype: 'application/json',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                data: jsonParams,
                success: function(result) {
                    if (result) {
                        resolve(JSON.parse(result))
                    } else {
                        resolve()
                    }
                },
                error: function(request) {
                    console.log(request)
                }
            })
        })
        return deferred
    },
    ajaxGet: function(serviceName, methodName, jsonParams) {
        var deferred = new Promise(function(resolve, reject) {
            return $.ajax({
                type: 'GET',
                url: serviceName,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                datatype: 'application/json',
                success: function(result) {
                    resolve(result)
                },
                error: function(request) {
                    resolve(false)
                }
            })
        })
        return deferred
    },
    ajaxDelete: function(serviceName, jsonParams) {
        var deferred = new Promise(function(resolve, reject) {
            return $.ajax({
                type: 'DELETE',
                url: serviceName,
                datatype: 'application/json',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                success: function(result) {
                    if (result) {
                        resolve(result)
                    } else {
                        resolve('')
                    }
                },
                error: function(request) {}
            })
        })
        return deferred
    }
}
export default WSProvider
