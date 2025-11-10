# almond

Electron updating server made to be super light-weight and easy to use and deploy, written in TypeScript!

## Release File Requirements

When uploading releases to GitHub, you need to include specific files for each platform to support both manual downloads and auto-updates.

### macOS Releases

For macOS, you need to upload **both** installer and update files:

1. **Installer file (`.dmg`)** - For manual downloads

   - Example: `neuron-mac-arm64-1.6.1-installer.dmg`
   - Used when users download directly from your website
   - Optional: `.blockmap` files for delta updates

2. **Update file (`.zip`)** - For auto-updates

   - Must contain the `.app` bundle (not the entire build folder)
   - **Important**: Filename must contain "mac" or "darwin" to be detected
   - Example: `neuron-mac-arm64-1.6.1.zip` or `neuron-darwin-arm64-1.6.1.zip`
   - Zip only the app bundle (e.g., `Neuron.app` from inside `/mac-arm64` folder)

3. **Auto-updater manifest (`latest-mac.yml`)**
   - Required by Electron's auto-updater
   - Upload separately alongside the `.zip` file

**Example macOS build output:**

```
- myapp-mac-arm64-1.6.1-installer.dmg (upload)
- myapp-mac-arm64-1.6.1-installer.dmg.blockmap (optional)
- myapp-mac-arm64-1.6.1.zip (upload - contains Myapp.app)
- latest-mac.yml (upload)
```

### Windows Releases

For Windows, the same `.exe` file is used for both manual downloads and auto-updates:

1. **Installer file (`.exe`)** - For both manual downloads and auto-updates

   - Example: `Myapp-Setup-1.6.1.exe`
   - Used for both scenarios (unlike macOS)

2. **Auto-updater manifest (`RELEASES`)** - Required for auto-updates

   - A file named `RELEASES` (no extension)
   - Contains references to `.nupkg` files
   - The server processes this file automatically

3. **Update packages (`.nupkg`)** - Required for auto-updates
   - Example: `Myapp-1.6.1-full.nupkg`
   - Referenced in the `RELEASES` file
   - Used by Electron's Squirrel updater

**Example Windows build output:**

```
- Myapp-Setup-1.6.1.exe (upload)
- RELEASES (upload)
- Myapp-1.6.1-full.nupkg (upload)
- Myapp-1.6.1-delta.nupkg (optional, for delta updates)
```
