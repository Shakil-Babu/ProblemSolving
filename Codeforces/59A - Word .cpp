#include<bits/stdc++.h>
#include <cstring>
using namespace std;
int main()
{
    char s[100]; cin >> s;
    int lc = 0, uc = 0;
    for(int i = 0; i<strlen(s); i++){
        if (s[i] < 92) {
            uc++;
        }else{
            lc++;
        }
    }

    for(int j = 0; j<strlen(s); j++){
        if(uc > lc){
            putchar(toupper(s[j]));
        }else{
            putchar(tolower(s[j]));
        }
    }
    return 0;
}
