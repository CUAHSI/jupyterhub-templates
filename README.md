# jupyterhub-templates

This repository contains html templates for the CUAHSI-JupyterHub platforms. These templates are loaded using the following code in Helm `config.yaml`. Custom templates should be modified from the original JupyterHub templates [https://github.com/jupyterhub/jupyterhub/tree/master/share/jupyterhub](https://github.com/jupyterhub/jupyterhub/tree/master/share/jupyterhub).


```

hub:
  # Clone custom JupyterHub templates into a volume
  initContainers:
    - name: git-clone-templates
      image: alpine/git
      args:
        - clone
          - --single-branch
          - --branch=master
          - --depth=1
          - --
        - [URL TO JUPYTER-TEMPLATES GIT REPO]
        - /etc/jupyterhub/custom
      securityContext:
        runAsUser: 0
      volumeMounts:
        - name: custom-templates
          mountPath: /etc/jupyterhub/custom
  extraVolumes:
    - name: custom-templates
      emptyDir: {}
  extraVolumeMounts:
    - name: custom-templates
      mountPath: /etc/jupyterhub/custom

  extraConfig:
    templates: |
      c.JupyterHub.template_paths = ['/etc/jupyterhub/custom/jupyterhub/templates']

```

See [Customizing-jupyterhub-on-kubernetes](https://discourse.jupyter.org/t/customizing-jupyterhub-on-kubernetes/1769/8) for more information.
