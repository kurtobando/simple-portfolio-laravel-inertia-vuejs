import { Head } from "@inertiajs/inertia-vue3";
import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  components: { Head },
  props: {
    status: Number,
    message: String
  },
  computed: {
    title() {
      return {
        503: "Service Unavailable",
        500: "Server Error",
        400: "Bad Request",
        401: "Unauthorized",
        404: "Page Not Found",
        403: "Forbidden"
      }[this.status];
    },
    description() {
      return {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        400: "Whoops, you have a bad request.",
        401: "Sorry, you are not authorized.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page."
      }[this.status];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>${ssrInterpolate($options.title)}</title>`);
      } else {
        return [
          createVNode("title", null, toDisplayString($options.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="min-h-screen flex flex-col items-center justify-center text-center uppercase text-slate-400 text-lg tracking-wider"><p>Oops, ${ssrInterpolate($options.title)}!</p><p class="text-slate-300">${ssrInterpolate((_a = $props.message) != null ? _a : $options.description)}</p></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TheExceptionHandler.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheExceptionHandler = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TheExceptionHandler as default
};
