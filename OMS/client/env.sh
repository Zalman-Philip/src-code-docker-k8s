#!/bin/bash

echo "window._env_ = { \"BASE_URL\": \"$BASE_URL\",  \"BNR_URL\": \"$BNR_URL\"};" > /usr/share/nginx/html/assets/config.js

sed -i "8i \ \ \ \ <script type=\"module\" src=\"/assets/config.js\"></script>" /usr/share/nginx/html/index.html