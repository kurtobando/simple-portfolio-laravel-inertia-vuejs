import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./FullWidth.e2bdd304.mjs";
import { _ as _sfc_main$1 } from "./SocialMediaLinks.c06d782a.mjs";
import "@inertiajs/inertia-vue3";
import "lucide-vue-next";
const __default__ = {
  layout: _sfc_main$2
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "TheIndex",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center text-center gap-4 p-8 min-h-screen" }, _attrs))}><h1 class="font-bold text-5xl wider tracking-tight">Hi there! I am Kurt</h1><p class="text-lg w-full lg:w-1/2 xl:w-1/2 2xl:w-1/3"> A frontend developer who enjoy the experience working with JavaScript, and travel during spare time. </p>`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "mt-8" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TheIndex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
