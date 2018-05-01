/*
*对于前后端分离的项目，跨域是最常见的问题，那么如何解决跨域的问题
*以通过create-react-app创建的react项目为例
*1.搭建一个中间服务器，中间服务器和前端项目是在一起的，通过中间服务器坐桥梁
*2.通过nginx来代理
nginx的相关配置如下以http为例
	1.首先在http的括号内,配置服务器地址的一个别名
	比如：
		upstream my_server {
		   server localhost:8080  weight=1;
		}
	此时my_server就是我后端服务的启动的地址
	2.在server的括号内配置转发规则,具体转发规则可参考nginx的转发配置
	比如我所有的请求都是在/api/timo这个路径下，那么我可以这么配置
		location /api/timo {
           proxy_pass http://my_server;
        }
    3.以上两步都已经配置好了，在项目的package.json配置文件中，在末尾添加
    	"proxy": "http://localhost:80/"
    以上三步骤全部配置完毕就可以访问了。


*如果了解后端的也可以不通过nginx来做代理，可以自己设置
以spring的项目为例
在controller的类上加上@CrossOrigin(origins = "*", maxAge = 3600)注解即可
也可以自己写一个crosFilter类，见文件夹下的CrosFilter

 --------------------------------------------
 也可以通过webpack来配置代理，具体配置请自行Google
*/