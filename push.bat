@echo off
xcopy /s /y E:\xampp\htdocs\RiddlesInteractive\style style\
xcopy /y E:\xampp\htdocs\RiddlesInteractive\images images\
xcopy /y E:\xampp\htdocs\RiddlesInteractive\js js\
copy /y E:\xampp\htdocs\RiddlesInteractive\index.html index.html
git remote set-url origin git@github.com:ReDrops/RiddlesLifeInteractive.git
git add index.html
git add style\* 
git add js\*
git add images\*
git commit -a -m "updated <3"
git push origin gh-pages