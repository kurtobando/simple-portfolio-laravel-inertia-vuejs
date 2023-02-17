import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./FullWidth.e2bdd304.mjs";
import { Head } from "@inertiajs/inertia-vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const TheProject_vue_vue_type_style_index_0_scoped_4d6c4e11_lang = "";
const __default__ = {
  layout: _sfc_main$1
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "TheProject",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-4d6c4e11${_scopeId}>${ssrInterpolate(__props.project.title)}</title>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(__props.project.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="p-6 w-full md:w-2/3 xl:w-1/2 mx-auto project" data-v-4d6c4e11><h1 class="font-bold text-5xl" data-v-4d6c4e11>${ssrInterpolate(__props.project.title)}</h1><div data-v-4d6c4e11>${__props.project.content}</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TheProject.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4d6c4e11"]]);
export {
  TheProject as default
};
