export const clickOutside = (node: any) => {

  const handleClick = (event: MouseEvent) => {
    console.log("handle click", node, event);
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('click_outside', node)
      )
    }
  }

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  }
};