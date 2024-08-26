window.onload = () => {
  const iframe = document.createElement("iframe");
  iframe.id = "test-embedded-widget";
  iframe.style.position = "fixed";
  iframe.style.zIndex = "1000";
  iframe.style.bottom = "0px";
  iframe.style.right = "0px";
  iframe.title = "tambi chat widget";
  iframe.height = "500px";
  iframe.width = "400px";
  iframe.src = "http://localhost:3003";

  window.addEventListener("resize", () => {
    /** @type {HTMLIFrameElement | null} **/
    const el = document.getElementById("test-embedded-widget");
    if (!el) return;

    if (window.innerWidth > 400) {
      el.width = "400px";
    } else {
      el.width = `${window.innerWidth}px`;
    }
  });

  // prepare the url
  const tambiId = window.tambiId;
  const tambiKey = window.tambiKey;
  const chatWidgetTitle = window.chatWidgetTitle;
  const url = `http://localhost:3003/?tambiid=${tambiId}&tambikey=${tambiKey}&widgettitle=${chatWidgetTitle}`;
  iframe.src = url;
  document.body.appendChild(iframe);
};
