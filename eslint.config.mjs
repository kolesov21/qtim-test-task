import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(defineConfig([eslintPluginPrettier]))
