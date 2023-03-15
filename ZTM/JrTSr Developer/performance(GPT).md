There are several common and effective performance techniques for websites and web apps to ensure fast loading times, smooth user experience, and efficient resource usage. Some of the most widely-used techniques include:


1. Minify and compress resources: Minify CSS, JavaScript, and HTML files to reduce their size, and use compression algorithms like Gzip or Brotli to compress text-based assets before serving them.

2. Optimize images: Use appropriate image formats (e.g., WebP or AVIF), compress images without losing quality, and serve images in multiple resolutions for different devices using responsive images techniques.

3. Use a Content Delivery Network (CDN): Distribute static assets such as images, stylesheets, and scripts across multiple servers around the world to reduce latency and improve load times for users.

4. Implement caching: Utilize browser caching for static resources, and server-side caching for dynamic content. Use cache-control headers, ETags, and other caching strategies to manage cache efficiently.

4. Optimize critical rendering path: Prioritize loading and rendering of above-the-fold content by deferring non-critical resources, inlining critical CSS, and using async or defer attributes for JavaScript.

5. Use lazy loading: Defer loading of non-critical resources such as images, videos, and iframes until they are needed, such as when they are scrolled into view.

6. Optimize server performance: Choose a fast web server (e.g., Nginx or Apache), use server-side caching and compression, and optimize database queries and indexing.

7. Reduce HTTP requests: Bundle multiple CSS and JavaScript files into one, use image sprites, and minimize the use of third-party plugins or libraries to decrease the number of server requests.

8. Use HTTP/2 or HTTP/3: Utilize the latest HTTP protocols to benefit from features like multiplexing, server push, and header compression, which can improve page load times.

9. Implement performance monitoring: Regularly monitor website performance using tools like Google Lighthouse, PageSpeed Insights, or WebPageTest, and analyze the results to identify areas for improvement.

10. Optimize for mobile devices: Use responsive design and consider mobile-first development to ensure your website or web app performs well on mobile devices.

11. Implement a Progressive Web App (PWA): Transform your web app into a PWA to provide native-like experiences with offline support, fast load times, and home screen installation.