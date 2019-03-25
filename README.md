# Shavar list testing using test pages
Instructions on how to create test profiles: https://wiki.mozilla.org/Services/TrackingProtection/Shavar_Server_-_Testing#SET_CUSTOM_PREFS

### https://mozilla.github.io/tracking-test/ads.html
1. Create a BASE profile
2. Restart browser
3. Navigate to https://mozilla.github.io/tracking-test/ads.html

expected result: fox displays, confirming page is serving correct content

### https://mozilla.github.io/tracking-test/analytics.html
1. Create a BASE profile
2. Restart browser
3. Navigate to https://mozilla.github.io/tracking-test/analytics.html

expected result: fox displays, confirming page is serving correct content

### https://mozilla.github.io/tracking-test/social.html
1. Create a BASE profile
2. Restart browser
3. Navigate to https://mozilla.github.io/tracking-test/social.html

expected result: fox displays, confirming page is serving correct content

### https://mozilla.github.io/tracking-test/disconnect.html
1. Create a BASE profile
2. Restart browser
3. Navigate to https://mozilla.github.io/tracking-test/disconnect.html

expected result: fox displays, confirming page is serving correct content

### https://mozilla.github.io/tracking-test/fastblock.html
1. Create a new profile
2. Edit about:config prefs for Fastblock lists as described on the page
3. Refresh page

expected result: fastblock.html displays status of Fastblock list is working

### https://mozilla.github.io/tracking-test/content.html
1. Create a STRICT profile
2. Restart browser
3. Navigate to https://mozilla.github.io/tracking-test/content.html

expected result: fox displays, confirming page is serving correct content

### https://mozilla.github.io/tracking-test/cryptomining.html
1. Create a crypto fingerprinting profile
2. Restart browser
3. Open a Private Browsing window
4. Navigate to https://mozilla.github.io/tracking-test/cryptomining.html

expected: fox displays, confirming page is serving correct content

### https://mozilla.github.io/tracking-test/fingerprinting.html
1. Create a crypto fingerprinting profile
2. Restart browser
3. Open a Private Browsing window
4. Navigate to https://mozilla.github.io/tracking-test/fingerprinting.html

expected: fox displays, confirming page is serving correct content
