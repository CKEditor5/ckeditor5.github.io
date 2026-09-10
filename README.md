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

## Large archives

Some project folders exceed GitHub's single-file size limit (100 MB).

To keep them in the repository while staying within GitHub's constraints, they are stored as multi-part compressed archives created with standard UNIX tools.

Each chunk is under 45 MB to stay safely below GitHub's recommended 50 MB limit and the 100 MB hard cap, while still preserving the complete data of both directories.

### Releases archive

The folder was packed using standard UNIX tools:

```bash
# Create archive and split it into 45 MB parts.
tar -C . -czf - releases | split -b 45m - releases-archive.tar.gz.part-
```

To **verify** integrity or **extract** the archive:

```bash
# Verify.
cat releases-archive.tar.gz.part-* | tar -tzf - >/dev/null

# Extract.
cat releases-archive.tar.gz.part-* | tar -xzf -
```

Each part (`releases-archive.tar.gz.part-*`) must be present in the same directory.

### Misc archive

```bash
# Create archive and split it into 45 MB parts.
tar -C . -czf - misc | split -b 45m - misc-archive.tar.gz.part-
```

To **verify** or **extract** the archive:

```bash
# Verify.
cat misc-archive.tar.gz.part-* | tar -tzf - >/dev/null

# Extract.
cat misc-archive.tar.gz.part-* | tar -xzf -
```

All parts (`misc-archive.tar.gz.part-*`) must be kept together in the same directory.
