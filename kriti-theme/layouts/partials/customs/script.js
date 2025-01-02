{{- $fs := (cond .IsPage .Params .Site.Params).scripts.custom -}}
{{- with $fs -}}
  {{- range . -}}
    {{- $s := resources.Get (printf "**/scripts/%s" .) -}}
    {{- $s = $s | minify | fingerprint -}}
    <script type="text/javascript" src="{{ $s }}" integrity="{{ $s }}"></script>
  {{- end -}}
{{- end -}}
