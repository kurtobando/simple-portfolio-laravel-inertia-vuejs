import { Link, Head, usePage } from "@inertiajs/inertia-vue3";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, computed, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main$1 = {
  components: {
    Link
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<menu${ssrRenderAttrs(mergeProps({ class: "flex justify-center md:justify-end items-center gap-8 p-8 px-12 text-lg" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Link, {
    class: ["hover:text-blue-500 transition-colors duration-200", { "font-bold": _ctx.$page.url === "/" }],
    href: _ctx.$route("about")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About `);
      } else {
        return [
          createTextVNode(" About ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: ["hover:text-blue-500 transition-colors duration-200", { "font-bold": _ctx.$page.url.startsWith("/projects") }],
    href: _ctx.$route("projects")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Projects `);
      } else {
        return [
          createTextVNode(" Projects ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: ["hover:text-blue-500 transition-colors duration-200", { "font-bold": _ctx.$page.url.startsWith("/contact") }],
    href: _ctx.$route("contact")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact `);
      } else {
        return [
          createTextVNode(" Contact ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</menu>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Navigation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Navigation,
    Head
  },
  setup() {
    const name = computed(() => usePage().props.value.app.name);
    const description = computed(() => usePage().props.value.app.description);
    return {
      name,
      description
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Navigation = resolveComponent("Navigation");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>${ssrInterpolate($setup.name)}</title><meta name="description"${ssrRenderAttr("content", $setup.description)}${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, toDisplayString($setup.name), 1),
          createVNode("meta", {
            name: "description",
            content: $setup.description
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<main class="min-h-screen">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layout/FullWidth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FullWidth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FullWidth as F
};
