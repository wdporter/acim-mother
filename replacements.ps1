
$filename = $args[0]
(Get-Content $filename) -replace "<i>", "*" | Set-Content $filename
(Get-Content $filename) -replace "</i>", "*" | Set-Content $filename
(Get-Content $filename) -replace "<em>", "*" | Set-Content $filename
(Get-Content $filename) -replace "</em>", "*" | Set-Content $filename
(Get-Content $filename) -replace "</span>", "" | Set-Content $filename
(Get-Content $filename) -replace "</p>", "" | Set-Content $filename
(Get-Content $filename) -replace "</sup>", "" | Set-Content $filename
(Get-Content $filename) -replace "'", "’" | Set-Content $filename
(Get-Content $filename) -replace '<p class="first-line-indent"><sup>', "" | Set-Content $filename
(Get-Content $filename) -replace "\d+ ", "" | Set-Content $filename
(Get-Content $filename) -replace "&nbsp;",  " " | Set-Content $filename
(Get-Content $filename) -replace "<br>",  "\" | Set-Content $filename
(Get-Content $filename) -replace "<b>",  "**" | Set-Content $filename
(Get-Content $filename) -replace "</b>",  "**" | Set-Content $filename
(Get-Content $filename -encoding utf8) -replace "—",  " — " | Set-Content $filename
(Get-Content $filename) -replace " """, ' “' | Set-Content $filename
(Get-Content $filename) -replace "\.""", '”.' | Set-Content $filename
(Get-Content $filename) -replace """ ", '” ' | Set-Content $filename
(Get-Content $filename) -replace '= “', '= "' | Set-Content $filename
