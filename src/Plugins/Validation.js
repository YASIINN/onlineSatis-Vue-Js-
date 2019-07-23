import Component from './Component'
var Validation = {

    checkvalidate:function(data,rules,ruleslength,rulesdata){
      if(rules){
        if(rules==">"){
              if(data.trim()=='' || data.trim().length>ruleslength){
                Component.showalert('Lütfen Form Verilerini Kontrol Ediniz', 'error', 'Tamam')
                return "is-invalid"

              }else{
                return  "is-valid"
              }
        }else if(rules=="<"){
          if(data.trim()=='' || data.trim().length<ruleslength){
            Component.showalert('Lütfen Form Verilerini Kontrol Ediniz', 'error', 'Tamam')
            return "is-invalid"
          }else{
            return  "is-valid"
          }
        } else if(rules=="="){
              if(data == rulesdata){
                Component.showalert('Lütfen Form Verilerini Kontrol Ediniz', 'error', 'Tamam')
                return "is-invalid"
              }else{
                return  "is-valid"
        }
        }
      }else{
          if(data.trim()==''){
            Component.showalert('Lütfen Form Verilerini Kontrol Ediniz', 'error', 'Tamam')
            return "is-invalid"
          }else{
            return  "is-valid"
          }
      }
    }
}
export default Validation
