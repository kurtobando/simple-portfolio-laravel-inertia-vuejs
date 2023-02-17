import { unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "TheDashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Dashboard</title>`);
          } else {
            return [
              createVNode("title", null, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="min-h-screen bg-slate-100 grid place-items-center p-6"><div class="p-8 bg-white shadow flex flex-col gap-4 w-full md:w-2/3"><h1 class="font-bold text-5xl mb-8">Hello there!</h1><a class="hover:text-blue-500 transition-colors duration-200" target="_blank"${ssrRenderAttr("href", _ctx.route("horizon.index"))}> Horizon <p class="text-xs text-slate-400"> Laravel Horizon provides a beautiful dashboard and code-driven configuration for your Laravel powered Redis queues. Horizon allows you to easily monitor key metrics of your queue system such as job throughput, runtime, and job failures. </p></a><a class="hover:text-blue-500 transition-colors duration-200" target="_blank"${ssrRenderAttr("href", _ctx.route("telescope"))}> Telescope <p class="text-xs text-slate-400"> Laravel Telescope makes a wonderful companion to your local Laravel development environment. Telescope provides insight into the requests coming into your application, exceptions, log entries, database queries, queued jobs, mail, notifications, cache operations, scheduled tasks, variable dumps, and more. </p></a>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "hover:text-blue-500 transition-colors duration-200 text-left",
        href: _ctx.route("sign-out"),
        as: "button",
        method: "post"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign-out <p class="text-xs text-slate-400"${_scopeId}>Sign-out your current session.</p>`);
          } else {
            return [
              createTextVNode(" Sign-out "),
              createVNode("p", { class: "text-xs text-slate-400" }, "Sign-out your current session.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/TheDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
