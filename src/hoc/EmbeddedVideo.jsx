export default function EmbeddedVideo({ srcLink }) {
  return (
    <div
      class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
      style="padding-top: 56.25%"
    >
      <iframe
        class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
        src={srcLink}
        allowfullscreen=""
        data-gtm-yt-inspected-2340190_699="true"
        id="240632615"
      />
    </div>
  );
}
