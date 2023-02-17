import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./FullWidth.e2bdd304.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
const __default__ = {
  layout: _sfc_main$1
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "TheProjects",
  __ssrInlineRender: true,
  props: {
    projects: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
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
      ssrRenderList(__props.projects, (project) => {
        _push(`<li class="rounded shadow hover:shadow-lg transition-shadow duration-100">`);
        _push(ssrRenderComponent(unref(Link), {
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TheProjects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
