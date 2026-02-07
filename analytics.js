var script = document.createElement('script');
script.src = 'https://us-assets.i.posthog.com/static/array.js';
script.onload = function() {
    posthog.init('phc_am3vis5jl6IgecclqFIov2y7nPZM40QLYqBvt0MBZqB', {
        api_host: 'https://us.i.posthog.com',
        defaults: '2025-11-30'
    });
};
document.head.appendChild(script);
