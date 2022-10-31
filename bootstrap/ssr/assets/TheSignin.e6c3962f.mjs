import Toastify from "toastify-js";
import { computed, resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { Head, Link, usePage, useForm } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const TheSignin_vue_vue_type_style_index_0_scoped_06dbbc6e_lang = "";
const _sfc_main = {
  components: {
    Head,
    Link
  },
  setup() {
    computed(() => usePage().props.value.flash.success);
    const error = computed(() => usePage().props.value.flash.error);
    const form = useForm({
      email: "",
      password: ""
    });
    const onSubmit = () => {
      form.post(route("sign-in.store"), {
        preserveScroll: true,
        onSuccess: () => {
          if (error.value) {
            Toastify({
              text: error.value,
              duration: 3e3,
              close: true,
              gravity: "top",
              position: "center",
              backgroundColor: "linear-gradient(90deg, rgba(255,0,0,1) 44%, rgba(255,113,0,1) 100%)"
            }).showToast();
          }
        }
      });
    };
    return {
      form,
      onSubmit
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title data-v-06dbbc6e${_scopeId}>Sign-in</title>`);
      } else {
        return [
          createVNode("title", null, "Sign-in")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="min-h-screen grid place-items-center bg-slate-100" data-v-06dbbc6e><div class="flex flex-col gap-8" data-v-06dbbc6e><form autocomplete="off" class="flex flex-col gap-4 p-8 py-20 bg-white shadow rounded placeholder-slate-400 text-sm" data-v-06dbbc6e><input class="form-text rounded border-slate-200 placeholder-slate-400 w-full" type="text" placeholder="email address"${ssrRenderAttr("value", $setup.form.email)} autocomplete="off" data-v-06dbbc6e>`);
  if ($setup.form.errors.email) {
    _push(`<p class="text-sm text-red-600" data-v-06dbbc6e>${ssrInterpolate($setup.form.errors.email)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input class="form-text rounded border-slate-200 placeholder-slate-400 w-full" type="password" placeholder="password"${ssrRenderAttr("value", $setup.form.password)} autocomplete="off" data-v-06dbbc6e>`);
  if ($setup.form.errors.password) {
    _push(`<p class="text-sm text-red-600" data-v-06dbbc6e>${ssrInterpolate($setup.form.errors.password)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""} class="p-5 px-8 bg-gray-800 hover:bg-gray-700 text-white rounded hover:bg-blue-500 transition-colors duration-200" type="submit" data-v-06dbbc6e> Sign-in </button></form>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-sm text-slate-400 text-center hover:text-blue-500",
    href: _ctx.route("about")
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/TheSignin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheSignin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-06dbbc6e"]]);
export {
  TheSignin as default
};
