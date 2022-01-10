#!/bin/bash

cd build && sudo zip -r build.zip . -x "alpha-clear/*";
scp build.zip rvsbox@185.119.59.186:/home/rvsbox/www/envato-nuno
rm -f build.zip


ssh rvsbox@185.119.59.186 << EOF
    rm -r /home/rvsbox/www/envato-nuno/public_html/alpha
    unzip /home/rvsbox/www/envato-nuno/build.zip -d /home/rvsbox/www/envato-nuno/public_html
    rm -f /home/rvsbox/www/envato-nuno/build.zip
EOF


# rm -f build.zip
# -f исключить подтверждение 'yes', 'no' и сразу удалить файл

# не включать папку в архив
# -x "build/alpha-clear/*"

# sudo zip -rq build.zip build;
# -q - вывод минимум информации о процессе 
# -r - обозначает рекурсивно

# scp test.txt rvsbox@185.119.59.186:/home/rvsbo


# echo 'script is running'
# ls -l



# rvsbox@185.119.59.186
# scp test.txt rvsbox@185.119.59.186:/home/rvsbox