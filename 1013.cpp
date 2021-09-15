#include <stdio.h>

int main()
{
 int a, b, c, temporaryNumber;

 scanf("%d %d %d", &a, &b, &c);

 temporaryNumber = a;
 if(a < b || a < c){
  if(b < c){
   temporaryNumber = c;
  }else{
   temporaryNumber = b;
  }
 }

 printf("%d eh o maior\n", temporaryNumber);

 return 0;
}