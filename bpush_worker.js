var global=("global",eval)("this");global._bpush_env={endpoint_base:"https://bpush.net",app_key:"<sample>"};self.addEventListener("install",function(b){});self.addEventListener("message",function(b){});self.addEventListener("push",function(d){var c=_bpush_env.endpoint_base+"/sapi/v1/get_notification";d.waitUntil(self.registration.pushManager.getSubscription().then(function(b){var e=b.subscriptionId;return fetch(c+"?"+("app_key="+_bpush_env.app_key+"&sid="+e)).then(function(f){if(200!==f.status){throw Error()}return f.json().then(function(g){if(g.error||!g.notification){throw Error()}g=g.notification;return self.registration.showNotification(g.subject,{body:g.body,tag:g.tag,icon:g.icon+"?nid="+g.id+"&sid="+e})})})}))});self.addEventListener("notificationclick",function(a){a.notification.close();if("user_visible_auto_notification"!=a.notification.tag){var b=a.notification.icon.split("?")[1].split("&"),e=b[0].split("=")[1],c=b[1].split("=")[1];a.waitUntil(clients.matchAll({type:"window"}).then(function(a){for(var b=0;b<a.length;b++){var d=a[b];if("/"==d.url&&"focus" in d){return d.focus()}}if(clients.openWindow){return a=(0,eval)("this"),clients.openWindow(a._bpush_env.endpoint_base+"/sapi/v1/click?app_key="+a._bpush_env.app_key+"&nid="+e+"&sid="+c)}}))}});self.addEventListener("activate",function(b){b.waitUntil(self.clients.claim())});