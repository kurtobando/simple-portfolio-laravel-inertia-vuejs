import { ref, useSSRContext, inject, computed, unref, withCtx, createVNode, withModifiers, toDisplayString, withDirectives, vModelText, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderTeleport, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./FullWidth.e2bdd304.mjs";
import { usePage, useForm, Head } from "@inertiajs/inertia-vue3";
import { onClickOutside } from "@vueuse/core";
import { _ as _sfc_main$2 } from "./SocialMediaLinks.c06d782a.mjs";
import Toastify from "toastify-js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "lucide-vue-next";
const _sfc_main$1 = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["onToggle"],
  setup(__props, { emit: emits }) {
    const modalRef = ref(null);
    const onToggle = () => emits("onToggle");
    onClickOutside(modalRef, onToggle);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.isOpen) {
          _push2(`<div class="relative z-10"><div class="fixed inset-0 bg-black bg-opacity-60"></div><div class="fixed inset-0 z-10 overflow-y-scroll md:overflow-y-hidden"><div class="flex min-h-full items-center justify-center p-4"><div class="relative rounded bg-white shadow p-6 md:p-10 w-full md:w-2/3 xl:w-2/3 2xl:w-1/2">`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
          _push2(`<a class="block underline text-sm text-center text-slate-600 my-8 mb-4 md:hidden cursor-pointer"> Close Window </a></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheContact_vue_vue_type_style_index_0_scoped_5e7eb970_lang = "";
const __default__ = {
  layout: _sfc_main$3
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "TheContact",
  __ssrInlineRender: true,
  setup(__props) {
    const route = inject("route");
    const modalIsOpen = ref(false);
    const success = computed(() => usePage().props.value.flash.success);
    const error = computed(() => usePage().props.value.flash.error);
    const form = useForm({
      name: "",
      email: "",
      message: ""
    });
    const submit = () => {
      form.post(route("contact.store"), {
        preserveScroll: true,
        onSuccess: () => {
          form.reset("name", "email", "message");
          Toastify({
            text: success.value,
            duration: 1e4,
            gravity: "top",
            position: "center",
            stopOnFocus: true
          }).showToast();
          modalToggle();
        }
      });
    };
    const modalToggle = () => modalIsOpen.value = !modalIsOpen.value;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-5e7eb970${_scopeId}>Contact</title>`);
          } else {
            return [
              createVNode("title", null, "Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col justify-center items-center text-center gap-4 p-8 min-h-screen" data-v-5e7eb970><h1 class="font-bold text-5xl wider tracking-tight" data-v-5e7eb970>Want to work together ?</h1><p class="text-lg" data-v-5e7eb970>If you are excited about something you are making. I want to work with you.</p><button class="p-5 px-8 bg-gray-800 hover:bg-gray-700 text-white rounded mt-8 hover:bg-blue-500 transition-colors duration-200" data-v-5e7eb970> Send Message </button>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        "is-open": modalIsOpen.value,
        onOnToggle: modalToggle
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col md:flex-row items-center gap-6 md:gap-8" data-v-5e7eb970${_scopeId}><div class="flex flex-col justify-center items-center text-center gap-4" data-v-5e7eb970${_scopeId}><h2 class="font-bold text-5xl -tracking-wide mt-8 md:mt-0" data-v-5e7eb970${_scopeId}>Hi There!</h2><p class="text-lg" data-v-5e7eb970${_scopeId}> I\u2019m interested in freelance opportunities, however, if you have other request or question, don\u2019t hesitate to use the form. </p>`);
            _push2(ssrRenderComponent(_sfc_main$2, { class: "md:mt-6" }, null, _parent2, _scopeId));
            _push2(`</div><form class="flex flex-col gap-3 w-full md:w-1/2" data-v-5e7eb970${_scopeId}><p class="text-red-600 text-center" data-v-5e7eb970${_scopeId}>${ssrInterpolate(unref(error))}</p><input class="rounded form-input border border-slate-200 placeholder-slate-400"${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="name" data-v-5e7eb970${_scopeId}>`);
            if (unref(form).errors.name) {
              _push2(`<p class="self-start text-sm text-red-600" data-v-5e7eb970${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<input class="rounded form-input border border-slate-200 placeholder-slate-400"${ssrRenderAttr("value", unref(form).email)} type="text" placeholder="email" data-v-5e7eb970${_scopeId}>`);
            if (unref(form).errors.email) {
              _push2(`<p class="self-start text-sm text-red-600" data-v-5e7eb970${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<textarea class="rounded form-textarea border border-slate-200 placeholder-slate-400" cols="30" rows="10" placeholder="message" data-v-5e7eb970${_scopeId}>${ssrInterpolate(unref(form).message)}</textarea>`);
            if (unref(form).errors.message) {
              _push2(`<p class="self-start text-sm text-red-600" data-v-5e7eb970${_scopeId}>${ssrInterpolate(unref(form).errors.message)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button class="bg-gray-800 text-white p-5 rounded hover:bg-blue-500 transition-colors duration-200" type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-5e7eb970${_scopeId}> Send </button></form></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col md:flex-row items-center gap-6 md:gap-8" }, [
                createVNode("div", { class: "flex flex-col justify-center items-center text-center gap-4" }, [
                  createVNode("h2", { class: "font-bold text-5xl -tracking-wide mt-8 md:mt-0" }, "Hi There!"),
                  createVNode("p", { class: "text-lg" }, " I\u2019m interested in freelance opportunities, however, if you have other request or question, don\u2019t hesitate to use the form. "),
                  createVNode(_sfc_main$2, { class: "md:mt-6" })
                ]),
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"]),
                  class: "flex flex-col gap-3 w-full md:w-1/2"
                }, [
                  createVNode("p", { class: "text-red-600 text-center" }, toDisplayString(unref(error)), 1),
                  withDirectives(createVNode("input", {
                    class: "rounded form-input border border-slate-200 placeholder-slate-400",
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    type: "text",
                    placeholder: "name"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).name]
                  ]),
                  unref(form).errors.name ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "self-start text-sm text-red-600"
                  }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true),
                  withDirectives(createVNode("input", {
                    class: "rounded form-input border border-slate-200 placeholder-slate-400",
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "text",
                    placeholder: "email"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).email]
                  ]),
                  unref(form).errors.email ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: "self-start text-sm text-red-600"
                  }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true),
                  withDirectives(createVNode("textarea", {
                    class: "rounded form-textarea border border-slate-200 placeholder-slate-400",
                    "onUpdate:modelValue": ($event) => unref(form).message = $event,
                    cols: "30",
                    rows: "10",
                    placeholder: "message"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).message]
                  ]),
                  unref(form).errors.message ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: "self-start text-sm text-red-600"
                  }, toDisplayString(unref(form).errors.message), 1)) : createCommentVNode("", true),
                  createVNode("button", {
                    class: "bg-gray-800 text-white p-5 rounded hover:bg-blue-500 transition-colors duration-200",
                    type: "submit",
                    disabled: unref(form).processing
                  }, " Send ", 8, ["disabled"])
                ], 40, ["onSubmit"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TheContact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheContact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e7eb970"]]);
export {
  TheContact as default
};
