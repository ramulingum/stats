var response = {
    "error":function(res,error,code){
        res.status(code);
        res.send({"error":error});
    },
    "success":function(res,message){
        res.status(200);
        res.send({message:message});
    },
    "ok":function(res){
        res.status(200);
        res.send({message:{"ok":true}});
    }
}
module.exports = response;