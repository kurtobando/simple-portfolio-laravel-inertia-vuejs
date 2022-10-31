import { Linkedin, Github } from "lucide-vue-next";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  components: {
    Linkedin,
    Github
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Github = resolveComponent("Github");
  const _component_Linkedin = resolveComponent("Linkedin");
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex gap-6" }, _attrs))}><li><a href="https://github.com/kurtobando/" target="_blank">`);
  _push(ssrRenderComponent(_component_Github, {
    class: "hover:text-blue-500 transition-colors duration-200",
    size: "30"
  }, null, _parent));
  _push(`</a></li><li><a href="https://www.linkedin.com/in/kurt-obando/" target="_blank">`);
  _push(ssrRenderComponent(_component_Linkedin, {
    class: "hover:text-blue-500 transition-colors duration-200",
    size: "30"
  }, null, _parent));
  _push(`</a></li></ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SocialMediaLinks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SocialMediaLinks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SocialMediaLinks as S
};
