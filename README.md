# https://ckeditor5.github.io

Installation steps.

```
npm i
```

*[OPTIONAL]* Assuming you've got [ckeditor5 cloned (and working)](https://github.com/ckeditor/ckeditor5/wiki/Development-environment) and want to use packages from it (Webpack is configured to use `packages/` and `node_modules/`):

```
mkdir packages
ln -s /workspace/ckeditor5/packages packages/\@ckeditor
```

Finally, build CKEditor for the sample:

```
npm run build
```

## Releases archive

Because the full `releases/` directory exceeds GitHub’s single-file size limits, it is stored as a multi-part compressed archive.
The folder was packed using standard UNIX tools:

```
# Create archive and split it into 45 MB parts
tar -C . -czf - releases | split -b 45m - releases-archive.tar.gz.part-
```

To **verify** integrity or **extract** the archive:

```
# Verify
cat releases-archive.tar.gz.part-* | tar -tzf - >/dev/null

# Extract
cat releases-archive.tar.gz.part-* | tar -xzf -
```

Each part (`releases-archive.tar.gz.part-*`) must be present in the same directory.

This approach keeps individual files below GitHub’s 100 MB hard limit while preserving the full release history.
