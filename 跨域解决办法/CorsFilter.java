package com.timo.react.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Uni on 2018/5/1.
 */
public class CorsFilter implements Filter {

    final static org.slf4j.Logger logger = org.slf4j.LoggerFactory.getLogger(CorsFilter.class);
    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
        response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, AJAX");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        System.out.println("*********************************过滤器被使用**************************");
        chain.doFilter(req, res);
    }
    @Override
    public void init(FilterConfig filterConfig) {}
    @Override
    public void destroy() {}

}
