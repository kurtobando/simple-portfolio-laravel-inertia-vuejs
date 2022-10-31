import { F as FullWidth } from "./FullWidth.471647c1.mjs";
import { S as SocialMediaLinks } from "./SocialMediaLinks.49cd05e0.mjs";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
import "lucide-vue-next";
const _sfc_main = {
  layout: FullWidth,
  components: {
    SocialMediaLinks
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SocialMediaLinks = resolveComponent("SocialMediaLinks");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center text-center gap-4 p-8 min-h-screen" }, _attrs))}><h1 class="font-bold text-5xl wider tracking-tight">Hi there! I am Kurt</h1><p class="text-lg w-full lg:w-1/2 xl:w-1/2 2xl:w-1/3"> A frontend developer who enjoy the experience working with JavaScript, and travel during spare time. </p>`);
  _push(ssrRenderComponent(_component_SocialMediaLinks, { class: "mt-8" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TheIndex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TheIndex as default
};
