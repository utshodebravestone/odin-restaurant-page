export const Route = (path, element, actionOn, actionOff) => ({
  path,
  element,
  actionOn,
  actionOff,
});

export const Router = (routes = []) => {
  const links = document.querySelectorAll("a");

  const init = () => {
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        routes
          .filter(
            (route) => location.host + route.path !== link.href.split("//")[1]
          )
          .map((route) => route.actionOff(route.element));

        let route = routes.find(
          (route) => location.host + route.path === link.href.split("//")[1]
        );
        if (route) {
          route.actionOn(route.element);
        }
      });
    });
  };

  return {
    init,
  };
};
