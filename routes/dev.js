module.exports = function(router, route) {
  router.get(route, function(request, response){
    router.render_template_file('public/dev.html', {}, function(exists, html) {
      response.end(html);
    });
  });
};
