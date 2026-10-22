#include <stdio.h>

int main()
{
    int T;
    scanf("%d",&T);
    while(T--){
        int N;
        scanf("%d",&N);
        if(N==0){
            printf("0\n");
            continue;
        }
        int a = 1;
        while(a*10<=N)
            a*=10;
        while(a>=1){
            printf("%d ",N/a);
            N%=a;
            a/=10;
        }
        printf("\n");
    }
}
