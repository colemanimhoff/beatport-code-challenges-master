const initResize = () => {
    /**
   * Implement a function that handles JavaScript events. When the user clicks
   * and drags the `resize` node, its parent node `panel` should grow or shrink
   * vertically.
   */

    const body = document.querySelector('body'); // or panel's parent element
    const panel = document.getElementById('panel');
    const resize = document.getElementById('resize');

    resize.addEventListener('mousedown', handleMouseDown);

    function handleMouseDown () {
        body.addEventListener('mousemove', handleMouseMove);
        body.addEventListener('mouseup', handleMouseUp);
    }

    function handleMouseMove (event) {
        const bodyRect = body.getBoundingClientRect();
        const height = bodyRect.height - event.clientY;

        panel.style.height = height;
    }

    function handleMouseUp () {
        body.removeEventListener('mousemove', handleMouseMove);
    }
};

window.initResize = initResize;
export default initResize;
