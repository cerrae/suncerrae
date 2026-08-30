 /** @type {import('next').NextConfig} */
-const nextConfig = {
+const basePath = '/suncerrae';
+
+const nextConfig = {
   output: 'export',
-  basePath: '/suncerrae',
+  basePath,
+  env: { NEXT_PUBLIC_BASE_PATH: basePath },
   images: { unoptimized: true },
 };
