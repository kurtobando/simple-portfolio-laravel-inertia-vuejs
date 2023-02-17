import { mergeProps, unref, withCtx, createTextVNode, useSSRContext, computed, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { Link, usePage, Head } from "@inertiajs/inertia-vue3";
const _sfc_main$1 = {
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<menu${ssrRenderAttrs(mergeProps({ class: "flex justify-center md:justify-end items-center gap-8 p-8 px-12 text-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Link), {
        class: ["hover:text-blue-500 transition-colors duration-200", { "font-bold": _ctx.$page.url === "/" }],
        href: _ctx.route("about")
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
      _push(ssrRenderComponent(unref(Link), {
        class: ["hover:text-blue-500 transition-colors duration-200", { "font-bold": _ctx.$page.url.startsWith("/projects") }],
        href: _ctx.route("projects")
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
      _push(ssrRenderComponent(unref(Link), {
        class: ["hover:text-blue-500 transition-colors duration-200", { "font-bold": _ctx.$page.url.startsWith("/contact") }],
        href: _ctx.route("contact")
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
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "FullWidth",
  __ssrInlineRender: true,
  setup(__props) {
    const name = computed(() => usePage().props.value.app.name);
    const description = computed(() => usePage().props.value.app.description);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(unref(name))}</title><meta name="description"${ssrRenderAttr("content", unref(description))}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(unref(name)), 1),
              createVNode("meta", {
                name: "description",
                content: unref(description)
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main class="min-h-screen">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layout/FullWidth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
