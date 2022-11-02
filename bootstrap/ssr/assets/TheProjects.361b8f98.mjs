import { F as FullWidth } from "./FullWidth.b4e28cb8.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  layout: FullWidth,
  components: {
    Head,
    Link
  },
  props: {
    projects: Array
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>Personal Projects</title>`);
      } else {
        return [
          createVNode("title", null, "Personal Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="grid place-items-center min-h-screen"><ul class="grid lg:grid-cols-2 gap-8 p-6 w-full md:w-2/3 xl:w-1/2"><!--[-->`);
  ssrRenderList($props.projects, (project) => {
    _push(`<li class="rounded shadow hover:shadow-lg transition-shadow duration-100">`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("projects.show", { slug: project.slug }),
      class: "block p-8"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="font-bold text-xl hover:text-blue-500 transition-colors duration-200"${_scopeId}>${ssrInterpolate(project.title)}</span><p class="text-slate-600 mt-2"${_scopeId}>${project.excerpt}</p>`);
        } else {
          return [
            createVNode("span", { class: "font-bold text-xl hover:text-blue-500 transition-colors duration-200" }, toDisplayString(project.title), 1),
            createVNode("p", {
              class: "text-slate-600 mt-2",
              innerHTML: project.excerpt
            }, null, 8, ["innerHTML"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TheProjects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheProjects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TheProjects as default
};
