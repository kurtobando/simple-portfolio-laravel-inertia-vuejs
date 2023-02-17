import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Head } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "TheExceptionHandler",
  __ssrInlineRender: true,
  props: {
    status: Number,
    message: String
  },
  setup(__props) {
    const props = __props;
    const title = computed(() => {
      return {
        503: "Service Unavailable",
        500: "Server Error",
        400: "Bad Request",
        401: "Unauthorized",
        404: "Page Not Found",
        403: "Forbidden"
      }[props.status];
    });
    const description = computed(() => {
      return {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        400: "Whoops, you have a bad request.",
        401: "Sorry, you are not authorized.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page."
      }[props.status];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(unref(title))}</title>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(unref(title)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="min-h-screen flex flex-col items-center justify-center text-center uppercase text-slate-400 text-lg tracking-wider"><p>Oops, ${ssrInterpolate(unref(title))}!</p><p class="text-slate-300">${ssrInterpolate((_a = __props.message) != null ? _a : unref(description))}</p></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TheExceptionHandler.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
