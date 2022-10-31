import { ref, useSSRContext, computed, resolveComponent, withCtx, createVNode, withModifiers, toDisplayString, withDirectives, vModelText, openBlock, createBlock, createCommentVNode } from "vue";
import { onClickOutside } from "@vueuse/core";
import { ssrRenderTeleport, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import { F as FullWidth } from "./FullWidth.b4e28cb8.mjs";
import { S as SocialMediaLinks } from "./SocialMediaLinks.49cd05e0.mjs";
import { Head, usePage, useForm } from "@inertiajs/inertia-vue3";
import Toastify from "toastify-js";
import "lucide-vue-next";
const _sfc_main$1 = {
  emits: ["onToggle"],
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props, { emit }) {
    const modalRef = ref(null);
    const onToggle = () => {
      emit("onToggle");
    };
    onClickOutside(modalRef, onToggle);
    return {
      onToggle,
      modalRef
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderTeleport(_push, (_push2) => {
    if ($props.isOpen) {
      _push2(`<div class="relative z-10"><div class="fixed inset-0 bg-black bg-opacity-60"></div><div class="fixed inset-0 z-10 overflow-y-scroll md:overflow-y-hidden"><div class="flex min-h-full items-center justify-center p-4"><div class="relative rounded bg-white shadow p-6 md:p-10 w-full md:w-2/3 xl:w-2/3 2xl:w-1/2">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
      _push2(`<a class="block underline text-sm text-center text-slate-600 my-8 mb-4 md:hidden"> Close Window </a></div></div></div></div>`);
    } else {
      _push2(`<!---->`);
    }
  }, "body", false, _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const TheContact_vue_vue_type_style_index_0_scoped_a295b2d8_lang = "";
const _sfc_main = {
  layout: FullWidth,
  components: {
    SocialMediaLinks,
    Head,
    Modal
  },
  setup() {
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
    const modalToggle = () => {
      modalIsOpen.value = !modalIsOpen.value;
    };
    return {
      form,
      submit,
      success,
      error,
      modalIsOpen,
      modalToggle
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Modal = resolveComponent("Modal");
  const _component_SocialMediaLinks = resolveComponent("SocialMediaLinks");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title data-v-a295b2d8${_scopeId}>Contact</title>`);
      } else {
        return [
          createVNode("title", null, "Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex flex-col justify-center items-center text-center gap-4 p-8 min-h-screen" data-v-a295b2d8><h1 class="font-bold text-5xl wider tracking-tight" data-v-a295b2d8>Want to work together ?</h1><p class="text-lg" data-v-a295b2d8>If you are excited about something you are making. I want to work with you.</p><button class="p-5 px-8 bg-gray-800 hover:bg-gray-700 text-white rounded mt-8 hover:bg-blue-500 transition-colors duration-200" data-v-a295b2d8> Send Message </button>`);
  _push(ssrRenderComponent(_component_Modal, {
    "is-open": $setup.modalIsOpen,
    onOnToggle: $setup.modalToggle
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col md:flex-row items-center gap-6 md:gap-8" data-v-a295b2d8${_scopeId}><div class="flex flex-col justify-center items-center text-center gap-4" data-v-a295b2d8${_scopeId}><h2 class="font-bold text-5xl -tracking-wide mt-8 md:mt-0" data-v-a295b2d8${_scopeId}>Hi There!</h2><p class="text-lg" data-v-a295b2d8${_scopeId}> I\u2019m interested in freelance opportunities, however, if you have other request or question, don\u2019t hesitate to use the form. </p>`);
        _push2(ssrRenderComponent(_component_SocialMediaLinks, { class: "md:mt-6" }, null, _parent2, _scopeId));
        _push2(`</div><form class="flex flex-col gap-3 w-full md:w-1/2" data-v-a295b2d8${_scopeId}><p class="text-red-600 text-center" data-v-a295b2d8${_scopeId}>${ssrInterpolate($setup.error)}</p><input class="rounded form-input border border-slate-200 placeholder-slate-400"${ssrRenderAttr("value", $setup.form.name)} type="text" placeholder="name" data-v-a295b2d8${_scopeId}>`);
        if ($setup.form.errors.name) {
          _push2(`<p class="self-start text-sm text-red-600" data-v-a295b2d8${_scopeId}>${ssrInterpolate($setup.form.errors.name)}</p>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<input class="rounded form-input border border-slate-200 placeholder-slate-400"${ssrRenderAttr("value", $setup.form.email)} type="text" placeholder="email" data-v-a295b2d8${_scopeId}>`);
        if ($setup.form.errors.email) {
          _push2(`<p class="self-start text-sm text-red-600" data-v-a295b2d8${_scopeId}>${ssrInterpolate($setup.form.errors.email)}</p>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<textarea class="rounded form-textarea border border-slate-200 placeholder-slate-400" cols="30" rows="10" placeholder="message" data-v-a295b2d8${_scopeId}>${ssrInterpolate($setup.form.message)}</textarea>`);
        if ($setup.form.errors.message) {
          _push2(`<p class="self-start text-sm text-red-600" data-v-a295b2d8${_scopeId}>${ssrInterpolate($setup.form.errors.message)}</p>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<button class="bg-gray-800 text-white p-5 rounded hover:bg-blue-500 transition-colors duration-200" type="submit"${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""} data-v-a295b2d8${_scopeId}> Send </button></form></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col md:flex-row items-center gap-6 md:gap-8" }, [
            createVNode("div", { class: "flex flex-col justify-center items-center text-center gap-4" }, [
              createVNode("h2", { class: "font-bold text-5xl -tracking-wide mt-8 md:mt-0" }, "Hi There!"),
              createVNode("p", { class: "text-lg" }, " I\u2019m interested in freelance opportunities, however, if you have other request or question, don\u2019t hesitate to use the form. "),
              createVNode(_component_SocialMediaLinks, { class: "md:mt-6" })
            ]),
            createVNode("form", {
              onSubmit: withModifiers($setup.submit, ["prevent"]),
              class: "flex flex-col gap-3 w-full md:w-1/2"
            }, [
              createVNode("p", { class: "text-red-600 text-center" }, toDisplayString($setup.error), 1),
              withDirectives(createVNode("input", {
                class: "rounded form-input border border-slate-200 placeholder-slate-400",
                "onUpdate:modelValue": ($event) => $setup.form.name = $event,
                type: "text",
                placeholder: "name"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $setup.form.name]
              ]),
              $setup.form.errors.name ? (openBlock(), createBlock("p", {
                key: 0,
                class: "self-start text-sm text-red-600"
              }, toDisplayString($setup.form.errors.name), 1)) : createCommentVNode("", true),
              withDirectives(createVNode("input", {
                class: "rounded form-input border border-slate-200 placeholder-slate-400",
                "onUpdate:modelValue": ($event) => $setup.form.email = $event,
                type: "text",
                placeholder: "email"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $setup.form.email]
              ]),
              $setup.form.errors.email ? (openBlock(), createBlock("p", {
                key: 1,
                class: "self-start text-sm text-red-600"
              }, toDisplayString($setup.form.errors.email), 1)) : createCommentVNode("", true),
              withDirectives(createVNode("textarea", {
                class: "rounded form-textarea border border-slate-200 placeholder-slate-400",
                "onUpdate:modelValue": ($event) => $setup.form.message = $event,
                cols: "30",
                rows: "10",
                placeholder: "message"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $setup.form.message]
              ]),
              $setup.form.errors.message ? (openBlock(), createBlock("p", {
                key: 2,
                class: "self-start text-sm text-red-600"
              }, toDisplayString($setup.form.errors.message), 1)) : createCommentVNode("", true),
              createVNode("button", {
                class: "bg-gray-800 text-white p-5 rounded hover:bg-blue-500 transition-colors duration-200",
                type: "submit",
                disabled: $setup.form.processing
              }, " Send ", 8, ["disabled"])
            ], 40, ["onSubmit"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TheContact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheContact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a295b2d8"]]);
export {
  TheContact as default
};
