import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Github, Linkedin } from "lucide-vue-next";
const _sfc_main = {
  __name: "SocialMediaLinks",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex gap-6" }, _attrs))}><li><a href="https://github.com/kurtobando/" target="_blank">`);
      _push(ssrRenderComponent(unref(Github), {
        class: "hover:text-blue-500 transition-colors duration-200",
        size: "30"
      }, null, _parent));
      _push(`</a></li><li><a href="https://www.linkedin.com/in/kurt-obando/" target="_blank">`);
      _push(ssrRenderComponent(unref(Linkedin), {
        class: "hover:text-blue-500 transition-colors duration-200",
        size: "30"
      }, null, _parent));
      _push(`</a></li></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SocialMediaLinks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
