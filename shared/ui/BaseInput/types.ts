import type { Component } from "vue";

export interface BaseInputProps {
  modelValue: string | number;
  label?: string;
  type?: BaseInputType;
  icon?: string | Component;
  iconPosition?: "left" | "right";
  color?: "white" | "unset";
  placeholder?: string;
  disabled?: boolean;
  size?: "sm" | "md";
  error?: string;
}

export interface BaseInputEmits {
  "update:modelValue": [value: string | number];
}

export type BaseInputType =
  | "text"
  | "password"
  | "email"
  | "search"
  | "number"
  | "tel"
  | "url";
