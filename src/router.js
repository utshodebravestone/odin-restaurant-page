export const Route = (path, element, actionOn, actionOff) => ({
  path,
  element,
  actionOn,
  actionOff,
});

export const Router = (routes = [], actionActivate, actionDeactivate) => {
  const links = document.querySelectorAll("a");

  const init = () => {
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        links.forEach((link) => {
          if (link.href !== location.href) {
            actionDeactivate(link);
          }
        });

        routes
          .filter(
            (route) => location.host + route.path !== link.href.split("//")[1]
          )
          .map((route) => route.actionOff(route.element));

        // routes.map((route) =>
        //   console.log(location.host + route.path, link.href.split("//")[1])
        // );

        let route = routes.find(
          (route) => location.host + route.path === link.href.split("//")[1]
        );
        if (route) {
          actionActivate(link);
          route.actionOn(route.element);
        }
      });
    });
  };

  return {
    init,
  };
};
