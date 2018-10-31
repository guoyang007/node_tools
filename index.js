const fs = require('fs') //引入node内置的文件系统

function rename() {
  let newName = []
  let dirPath = './src/assets/old_img/';
  let newDirPath = './src/assets/images/';
  fs.readdir(dirPath, (err, oldName) => {  //读取file文件夹下的文件的名字，oldName是一个数组
    if (err) {
      console.log(err)
    }
    for (let i = 1; i <= oldName.length; i++) {
      let name = `book_${i}.jpg` // 以图片为例
      newName[i] = name        // 把名字赋给一个新的数组
    }

    for (var i = 0; i < oldName.length; i++) {
      let oldPath = `${dirPath}${oldName[i]}`  //原本的路径
      let newPath = `${newDirPath}${newName[i]}`  //新路径

      fs.rename(oldPath, newPath, (err) => {  //重命名
        if (err) {
          console.log(err)
        }
        console.log('done!')
      })
    }

  })
}

rename()