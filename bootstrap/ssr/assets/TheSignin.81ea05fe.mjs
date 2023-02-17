import { inject, computed, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { usePage, useForm, Head, Link } from "@inertiajs/inertia-vue3";
import "toastify-js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const TheSignin_vue_vue_type_style_index_0_scoped_4caac8bb_lang = "";
const _sfc_main = {
  __name: "TheSignin",
  __ssrInlineRender: true,
  setup(__props) {
    const route = inject("route");
    computed(() => usePage().props.value.flash.success);
    computed(() => usePage().props.value.flash.error);
    const form = useForm({
      email: "",
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-4caac8bb${_scopeId}>Sign-in</title>`);
          } else {
            return [
              createVNode("title", null, "Sign-in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="min-h-screen grid place-items-center bg-slate-100" data-v-4caac8bb><div class="flex flex-col gap-8" data-v-4caac8bb><form autocomplete="off" class="flex flex-col gap-4 p-8 py-20 bg-white shadow rounded placeholder-slate-400 text-sm" data-v-4caac8bb><input class="form-text rounded border-slate-200 placeholder-slate-400 w-full" type="text" placeholder="email address"${ssrRenderAttr("value", unref(form).email)} autocomplete="off" data-v-4caac8bb>`);
      if (unref(form).errors.email) {
        _push(`<p class="text-sm text-red-600" data-v-4caac8bb>${ssrInterpolate(unref(form).errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input class="form-text rounded border-slate-200 placeholder-slate-400 w-full" type="password" placeholder="password"${ssrRenderAttr("value", unref(form).password)} autocomplete="off" data-v-4caac8bb>`);
      if (unref(form).errors.password) {
        _push(`<p class="text-sm text-red-600" data-v-4caac8bb>${ssrInterpolate(unref(form).errors.password)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="p-5 px-8 bg-gray-800 hover:bg-gray-700 text-white rounded hover:bg-blue-500 transition-colors duration-200" type="submit" data-v-4caac8bb> Sign-in </button></form>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "text-sm text-slate-400 text-center hover:text-blue-500",
        href: unref(route)("about")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Go to Home `);
          } else {
            return [
              createTextVNode(" Go to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/TheSignin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheSignin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4caac8bb"]]);
export {
  TheSignin as default
};
