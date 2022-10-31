import { F as FullWidth } from "./FullWidth.471647c1.mjs";
import { Head } from "@inertiajs/inertia-vue3";
import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const TheProject_vue_vue_type_style_index_0_scoped_726f97d5_lang = "";
const _sfc_main = {
  layout: FullWidth,
  components: {
    Head
  },
  props: {
    project: Object
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title data-v-726f97d5${_scopeId}>${ssrInterpolate($props.project.title)}</title>`);
      } else {
        return [
          createVNode("title", null, toDisplayString($props.project.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="p-6 w-full md:w-2/3 xl:w-1/2 mx-auto project" data-v-726f97d5><h1 class="font-bold text-5xl" data-v-726f97d5>${ssrInterpolate($props.project.title)}</h1><div data-v-726f97d5>${$props.project.content}</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TheProject.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-726f97d5"]]);
export {
  TheProject as default
};
