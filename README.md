``` powershell
$project = Read-Host -Prompt 'Input the project name' 
Write-Host Creating $project directory 
npx create-react-app $project 
cd $project 
Write-Host Installing dependencies 
npm install react-redux redux redux-thunk axios lodash bootstrap react-bootstrap react-spaces@0.1.20-alpha.4 react-icons --save  
npm install css-loader style-loader node-sass sass-loader --save-dev  
$repo = "julien-delenclos/react-redux-starter" 
$releases = "https://api.github.com/repos/$repo/releases" 
Write-Host Determining latest release 
$tag = (Invoke-WebRequest $releases | ConvertFrom-Json)[0].tag_name 
$download = (Invoke-WebRequest $releases | ConvertFrom-Json)[0].zipball_url 
$dir = "base-$tag" 
$zip = "$dir.zip" 
Write-Host Dowloading latest release 
Invoke-WebRequest $download -Out $zip 
Write-Host Extracting release files 
Expand-Archive $zip -Force 
$subDir = (Get-ChildItem -Path $dir -Name) 
robocopy ".\$dir\$subDir\" ".\" /E 
Write-Host Cleaning 
Remove-Item $zip -Force 
Remove-Item $dir -Recurse -Force 
Remove-Item ".\src\App.css" -Force 
Remove-Item ".\src\App.js" -Force 
Remove-Item ".\src\App.test.js" -Force 
npm start 
Write-Host Done 
```
